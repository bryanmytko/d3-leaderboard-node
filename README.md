# D3 Leaderboard API Wrapper

## Requirements

Get an Access Token from Blizzard [https://dev.battle.net/io-docs](https://dev.battle.net/io-docs)

## Usage

Setup:

    var access_token = 'xxxxxxxxxxxxxxxxxxxxx';
    var locale = 'enUS';

    var D3 = require('d3-leaderboard');
    client = new D3(access_token, locale);

_locale is optional; defaults to enUS_

#### /seasons

This method takes no arguments and a callback function.

    client.seasons(function(error, body){});

#### /season/:id

**id** (required) - The season you are looking to return

    client.season({ id: 5 }, function(error, body){});

#### /eras

This method takes no arguments and a callback function.

    client.eras(function(error, body){});

#### /era/:id

**id** (required) - The era you are looking to return

    client.era({ id: 5 }, function(error, body){});

## Developers

Tests require an env-vars.js file in **/test** directory with access token field:

    module.exports = {
      'BLIZZARD_ACCESS_TOKEN': 'xxxxxxxxxxxxxxxxxxxxxxx'
    };

Run with `mocha` or `mocha debug test/ -R spec`

## Contributing

1. Fork it ( https://github.com/[my-github-username]/d3-leaderboard-node/fork )
1. Create your feature branch (git checkout -b my-new-feature)
1. Commit your changes (git commit -am 'Add some feature')
1. Push to the branch (git push origin my-new-feature)
1. Create a new Pull Request
