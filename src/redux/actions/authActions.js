import AuthService from '../../services/authService';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginUser = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  
  try {
    const userData = await AuthService.login(credentials);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: userData
    });
    return { success: true };
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: error.response?.data?.message || 'Login failed'
    });
    return { 
      success: false, 
      message: error.response?.data?.message || 'Login failed' 
    };
  }
};

export const logoutUser = () => (dispatch) => {
  AuthService.logout();
  dispatch({ type: LOGOUT });
};

export const resetPassword = (email) => async (dispatch) => {
  dispatch({ type: 'RESET_PASSWORD_REQUEST' });

  try {
    await AuthService.resetPassword(email);
    dispatch({ type: 'RESET_PASSWORD_SUCCESS' });
    return { success: true };
  } catch (error) {
    dispatch({ type: 'RESET_PASSWORD_FAILURE', payload: error.message });
    return { success: false, message: error.message };
  }
};

export const registerUser = (userData) => async (dispatch) => {
  dispatch({ type: 'REGISTER_REQUEST' });

  try {
    const user = await AuthService.register(userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: user });
    return { success: true };
  } catch (error) {
    dispatch({ type: 'REGISTER_FAILURE', payload: error.message });
    return { success: false, message: error.message };
  }
};