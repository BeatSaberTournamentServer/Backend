/*
Server (RelayServer):
    - IP: The IP of the server, with ws:// infront
    - Port: The port of the server

TA:
    - IP: The IP of the TA server, with ws:// infront
    - Port: The port of the TA server
    - Password: The password of the TA server, leave blank if there is no password

Gamemode: VERSUS / BR / PS
    - VERSUS is the normal 1v1, 2v2 version, which is mostly controlled by the webpanel (Pick's'Ban's, Add user to overlay + show current map, etc.)
    - BR is the Battle Royale version. Current map is controlled by the server directly. Webpanel is used for picking who's being spectated, dead/alive/score 
    - PS, aka PokéSaber, is the Pokémon style tournament. Nothing on the frontend is controlled by the relay-server, only sending scores to the frontend.
*/
export default {
    Server: {
        ip: 'ws://localhost',
        port: 2223
    },
    TA: {
        ip: 'ws://tournamentassistant.net',
        port: 2053,
        password: ''
    },
    Gamemode: "VERSUS",
    Modals: true,
};
