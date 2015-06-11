<?php
header('Access-Control-Allow-Origin: *');

require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "3289076044-I8I3zEp1ztvCqGpiX1lKb1K1SmPbN5kED2yu8U9",
    'oauth_access_token_secret' => "ovVeZQXRbqxMdCbBJzxh1WxBSerg3fB3QCC6aU0iwl7A6",
    'consumer_key' => "YKHR4gGXnblhmDE2CPTur0cSx",
    'consumer_secret' => "dIvOl3s93tmpXgqLfqap1JxDMbzECQrd6542mjb4OsOxvh2Z71"
);

/** Note: Set the GET field BEFORE calling buildOauth(); **/
$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
$getfield = '?screen_name=BigGymSRL&count=1';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();


?>