<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AccountController extends Controller
{

    /**
     * Returns the logged-in account's display data.
     * 
     * The frontend calls this once, in the main layout. Other layouts and
     * pages read that result instead of calling it again.
     * A 401 means "not logged in".
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
     * Routes is authenticated.
     * 
     * Return Account info
     */
    public function view(Request $request)
    {
        $login = $request->user();

        // Vip status came from fluxCP
        $vipStatus = $login->vip_time > '0'
            ? 'Expires ' . date('Y-m-d', (int) $login->vip_time)
            : 'Standard Account';

        return response()->json([
            'username'      => $login->userid,
            'email'         => $login->email,
            'gender'        => match ($login->sex) {
                'M'         => 'Male',
                'F'         => 'Female',
            },
            'state'         => match ($login->state) {
                '0'         => 'Normal',
                '1'         => 'Permanently Banned',
                '5'         => 'Temporarily Banned',
                default     => 'Unknown Status',
            },
            'loginCount'    => $login->logincount,
            'vipStatus'     => $vipStatus,
            'lastLogin'     => $login->lastlogin,
            'creditBalance' => "0", //TODO: need to find how this works
            'birthdate'     => $login->bithdate,
            'lastIP'        => $login->last_ip,

            // Base on group_id
            'accountID'  => $login->group_id > '0' ? $login->account_id : null,
            'groupID'    => $login->group_id > '0' ? $login->group_id : null,
            'characters'    => $login->chars,
        ]);
    }


    /**
     * Routes is authenticated.
     * 
     * Return Account characters
     */
    public function characters(Request $request)
    {

        $login = $request->user();
        $jobNames = config('ro.jobs', []);

        $characters = $login->chars->map(function ($char) use ($jobNames) {
            return [
                'id' => $char->char_id,
                'slot'  => $char->char_num + 1,
                'name' => $char->name,
                'jobClass' => $jobNames[$char->class],
                'baseLevel' => $char->base_level,
                'jobLevel' => $char->job_level,
                'zeny' => $char->zeny,
                'guild' => ($char->guild_id === 0) ? 'None' : $char->guild->name,
                'online' => $char->online ? 'Online' : 'Offline',
            ];
        });

        return response()->json(
            $characters,
        );
    }
}
