export const ACTION_UPDATE_USER_PROFILE  = 'ACTION_UPDATE_USER_PROFILE';

/**
 * An "Action Creator" which creates (=returns) an "Action".
 * "Actions" are relevant during application bootstrap and later in application lifecycle.
 * For example each user interaction or pull/push notification that must update/change
 * the application status will trigger the "Action Creator" function.
 * 
 * Important: 
 * "Action Creators" are the only place in code where asynchronous requests (e.g. server requests) 
 * should be executed and handled.
 * 
 * @param {*} userProfile 
 */
export function updateUserProfile(userProfile) {
    return {
        type: ACTION_UPDATE_USER_PROFILE,
        userProfile
    }
}