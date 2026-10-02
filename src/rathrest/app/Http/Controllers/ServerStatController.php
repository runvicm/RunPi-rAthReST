<?php

namespace App\Http\Controllers;

use App\Models\Char;
use App\Models\Login;
use Dedoc\Scramble\Attributes\Group;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

#[Group('Server Status', weight: 2)]
class ServerStatController extends Controller
{

    /**
     * Server Status
     *
     * Checks whether each game server is accepting connections. (login, char, map)
     *
     * @unauthenticated
     *
     * @response array{login: bool, char: bool, map: bool}
     */
    public function status()
    {
        $status = [];

        foreach (config('rathrest.config.server') as $name => $s) {
            $conn = @fsockopen($s['host'], $s['port'], $errno, $errstr, 1);
            $status[$name] = (bool) $conn;
            if ($conn) {
                fclose($conn);
            }
        }

        return response()->json($status);
    }

    /**
     * Server statistic
     *
     * Returns the total registered accounts, the number of created characters,
     * and the number of players currently online.
     *
     * @unauthenticated
     */
    public function stats()
    {

        $accounts = Login::where('account_id', '>=', 200000)
            ->where('group_id', 0)
            ->count();

        $characters = Char::count();
        $online     = Char::where('online', 1)->count();

        return Cache::remember('ro.stats', 60, function () use ($accounts, $characters, $online) {

            return [
                'accounts'   => $accounts,          // registered accounts
                'characters' => $characters,        // 
                'online'     => $online,
                // TODO: peak online
            ];
        });
    }
}
