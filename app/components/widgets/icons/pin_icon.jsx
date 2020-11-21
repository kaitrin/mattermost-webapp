// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {useIntl} from 'react-intl';

export default function PinIcon(props) {
    const {formatMessage} = useIntl();
    return (
        <span {...props}>
            <svg
                width='16px'
                height='16px'
                viewBox='0 0 18 18'
                version='1.1'
                role='img'
                aria-label={formatMessage({id: 'generic_icons.pin', defaultMessage: 'Pin Icon'})}
            >
                <path d='M17.73 7.01999L16.83 6.11999L10.98 0.251987C10.812 0.0839874 10.602 -1.26362e-05 10.35 -1.26362e-05C10.098 -1.26362e-05 9.888 0.0899873 9.72 0.269987C9.54 0.449987 9.45 0.665987 9.45 0.917987C9.45 1.15799 9.54 1.36799 9.72 1.54799L9.99 1.79999L5.994 5.75999C4.422 5.57999 2.922 5.77799 1.494 6.35399C1.35 6.40199 1.224 6.48599 1.116 6.60599C1.02 6.72599 0.954 6.86399 0.918 7.01999C0.894 7.16399 0.9 7.30799 0.936 7.45199C0.984 7.59599 1.062 7.72199 1.17 7.82999L5.004 11.664L1.35 15.3L0.45 17.55L2.7 16.65L6.354 13.014L10.17 16.83C10.278 16.938 10.404 17.01 10.548 17.046C10.704 17.094 10.854 17.1 10.998 17.064C11.154 17.04 11.286 16.974 11.394 16.866C11.514 16.77 11.598 16.644 11.646 16.488C12.246 15.024 12.444 13.524 12.24 11.988L16.2 8.02799L16.452 8.29799C16.632 8.47799 16.848 8.56799 17.1 8.56799C17.352 8.56799 17.562 8.47799 17.73 8.29799C17.91 8.11799 18 7.90799 18 7.66799C18 7.41599 17.91 7.19999 17.73 7.01999ZM10.584 11.052C10.464 11.172 10.386 11.316 10.35 11.484C10.314 11.64 10.32 11.796 10.368 11.952C10.584 12.792 10.584 13.638 10.368 14.49L3.51 7.63199C4.362 7.41599 5.208 7.41599 6.048 7.63199C6.204 7.67999 6.36 7.68599 6.516 7.64999C6.684 7.60199 6.828 7.51799 6.948 7.39799L11.25 3.07799L14.904 6.73199L10.584 11.052Z'/>
            </svg>
        </span>
    );
}