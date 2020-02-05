import { useState } from 'react';

const [ loadingState, changeLoadingState ] = useState(false);

const hooks = {
    loading: {
        state: loadingState,
        setState: changeLoadingState
    },
};

export default hooks;

