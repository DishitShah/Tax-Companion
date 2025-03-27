import UserProfileService from '../../services/userProfileService';

export const fetchUserProfile = () => async (dispatch) => {
  dispatch({ type: 'FETCH_USER_PROFILE_REQUEST' });

  try {
    const userProfile = await UserProfileService.getUserProfile();
    dispatch({ type: 'FETCH_USER_PROFILE_SUCCESS', payload: userProfile });
  } catch (error) {
    dispatch({ type: 'FETCH_USER_PROFILE_FAILURE', payload: error.message });
  }
};

export const updateUserProfile = (formData) => async (dispatch) => {
  dispatch({ type: 'UPDATE_USER_PROFILE_REQUEST' });

  try {
    const updatedProfile = await UserProfileService.updateUserProfile(formData);
    dispatch({ type: 'UPDATE_USER_PROFILE_SUCCESS', payload: updatedProfile });
  } catch (error) {
    dispatch({ type: 'UPDATE_USER_PROFILE_FAILURE', payload: error.message });
  }
};

export const changePassword = (passwordData) => async (dispatch) => {
  dispatch({ type: 'CHANGE_PASSWORD_REQUEST' });

  try {
    await UserProfileService.changePassword(passwordData);
    dispatch({ type: 'CHANGE_PASSWORD_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'CHANGE_PASSWORD_FAILURE', payload: error.message });
  }
};