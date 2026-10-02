<?php

namespace App\Http\Controllers;

use Dedoc\Scramble\Attributes\Group;
use Illuminate\Http\Request;

#[Group('Account', weight: 4)]
class AccountController extends Controller
{

    /**
     * Check authenticated account
     *
     * Returns the logged-in account's username and group ID. The frontend calls this once in the main layout, and other layouts and pages reuse that result instead of calling it again.
     */
    public function account(Request $request)
    {

        $login = $request->user();

        return response()->json([
            'username'   => $login->userid,
            'role' => $login->group_id,
            // TODO: will add more if needed
        ]);
    }

    /**
     * View
     * 
     * Returns information belong to the logged-in account.
     *
     * @response array{
     *   "username": string,
     *   "email": string,
     *   "gender": "Male" | "Female",
     *   "state": string,
     *   "loginCount": number,
     *   "vipStatus": string,
     *   "lastLogin": string,
     *   "creditBalance": number,
     *   "birthdate": string,
     *   "lastIP": string,
     *   "accountID": number,
     *   "groupID": number
     * }
     * 
     */
    public function view(Request $request)
    {
        $login = $request->user();
        $gender = config('rathrest.sex', []);
        $state = config('rathrest.state', []);

        // Vip status came from fluxCP
        $vipStatus = $login->vip_time > '0'
            ? 'Expires ' . date('Y-m-d', (int) $login->vip_time)
            : 'Standard Account';

        return response()->json([
            'username'      => $login->userid,
            'email'         => $login->email,
            'gender'        => $gender[$login->sex],
            'state'         => $state[$login->state],
            'loginCount'    => $login->logincount,
            'vipStatus'     => $vipStatus,
            'lastLogin'     => $login->lastlogin,
            'creditBalance' => 0, //TODO: need to find how this works
            'birthdate'     => $login->bithdate,
            'lastIP'        => $login->last_ip,

            // Base on group_id
            'accountID'  => $login->group_id > '0' ? $login->account_id : null,
            'groupID'    => $login->group_id > '0' ? $login->group_id : null,
        ]);
    }


    /**
     * Characters
     *
     * Returns all characters that belong to the logged-in account.
     * 
     * @response array{
     *   "id": 150000,
     *   "slot": 1,
     *   "name": "shadowmage92",
     *   "jobClass": "Novice",
     *   "baselvl": 15,
     *   "joblvl": 10,
     *   "zeny": "1,100",
     *   "guild": "Guild Name",
     *   "online": "Online" | "Offline",
     * }
     * 
     */
    public function characters(Request $request)
    {

        $login = $request->user();
        $jobNames = config('rathrest.jobs', []);

        $characters = $login->chars->map(function ($char) use ($jobNames) {
            return [
                'id' => $char->char_id,
                'slot'  => $char->char_num + 1,
                'name' => $char->name,
                'jobClass' => $jobNames[$char->class],
                'baselvl' => $char->base_level,
                'joblvl' => $char->job_level,
                'zeny' => $char->zeny,
                'guild' => ($char->guild_id === 0) ? 'None' : $char->guild->name,
                'online' => $char->online ? 'Online' : 'Offline',
            ];
        });

        return response()->json(
            $characters,
        );
    }
    /**
     * Storage
     *
     * Returns the Kafra storage items that belong to the logged-in account.
     */
    public function storage() {}
}
