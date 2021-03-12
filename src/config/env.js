import {DEV_BACKEND_URL, PROD_BACKEND_URL} from '@env';

const devEnvironnementVariables = {
    DEV_BACKEND_URL,
};

const prodEnvironnementVariables = {
    PROD_BACKEND_URL,
};

export default __DEV__ ? devEnvironnementVariables: prodEnvironnementVariables