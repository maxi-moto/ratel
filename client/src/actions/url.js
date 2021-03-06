// Copyright 2017-2018 Dgraph Labs, Inc. and Contributors
//
// Licensed under the Dgraph Community License (the "License"); you
// may not use this file except in compliance with the License. You
// may obtain a copy of the License at
//
//     https://github.com/dgraph-io/ratel/blob/master/LICENSE

export const UPDATE_URL = "url/UPDATE_URL";

export function updateUrl(url) {
    return {
        type: UPDATE_URL,
        url,
    };
}
