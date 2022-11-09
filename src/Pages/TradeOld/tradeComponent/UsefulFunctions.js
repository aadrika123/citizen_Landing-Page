import React from 'react';

// This function converts application types [1,2,3,4] to their respective string equivalent types

export const convertApplicationTypeToString = (val) => {
    let type = 'NEWLICENSE';

    if (val == 1) { type = "NEWLICENSE" }
    if (val == 2) { type = "RENEWAL" }
    if (val == 3) { type = "AMENDMENT" }
    if (val == 4) { type = "SURRENDER" }

    return type;
}