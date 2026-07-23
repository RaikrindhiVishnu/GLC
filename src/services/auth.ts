import { API_BASE_URL } from './mail';


export interface LoginRequest {
  login_id: string;
  password?: string;
}

export interface LoginResponse {
  id: number;
  login_id: string;
  first_name: string;
  last_name: string;
  profile_url: string | null;
  role_id: number;
  is_first_login: number;
  token: string;
  refreshToken: string;
  // Fallback fields based on potential error structures
  error?: string;
  success?: boolean;
  message?: string;
}

export interface CheckStatusRequest {
  emailAddress: string;
}

export interface CheckStatusResponse {
  user_exists: number;
  user_registration_status_code: string;
  user_registration_status_description: string;
  error?: string;
  message?: string;
}

export interface RefreshTokenRequest {
  token: string;
}

export interface RefreshTokenResponse {
  token: string;
  refreshToken: string;
  error?: string;
  message?: string;
}

export interface ForgotPasswordRequest {
  login_id: string;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
}

export interface ResetPasswordRequest {
  login_id: string;
  new_password?: string; // made optional if sometimes omitted, but usually required
}

export interface ResetPasswordResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface UpdatePasswordRequest {
  new_password: string;
}

export interface UpdatePasswordResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface LogoutRequest {
  device_id: string;
  platform: string;
}

export interface LogoutResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface ApproveUserRequest {
  user_id: number;
  role_id: number;
  role_code: string;
}

export interface ApproveUserResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

export interface RejectUserRequest {
  user_id: number;
}

export interface RejectUserResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

export interface SendOtpRequest {
  emailAddress: string;
}

export interface SendOtpResponse {
  message?: string;
  error?: string;
}

export interface VerifyOtpRequest {
  emailAddress: string;
  otp: string;
}

export interface VerifyOtpResponse {
  message?: string;
  error?: string;
}

export const authService = {
  /**
   * Verify OTP
   * @param payload Request body containing emailAddress and otp
   * @returns VerifyOtpResponse
   */
  async verifyOtp(payload: VerifyOtpRequest): Promise<VerifyOtpResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/verify_otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const errorMessage = data.error || data.message || `Verify OTP request failed with status: ${response.status}`;
      throw new Error(errorMessage);
    }

    return data;
  },

  /**
   * Send OTP to email
   * @param payload Request body containing emailAddress
   * @returns SendOtpResponse
   */
  async sendOtp(payload: SendOtpRequest): Promise<SendOtpResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/send_otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const errorMessage = data.error || data.message || `Send OTP request failed with status: ${response.status}`;
      throw new Error(errorMessage);
    }

    return data;
  },

  /**
   * Reject user registration (admin only)
   * @param payload Request body containing user_id
   * @param token Valid JWT Bearer token
   * @returns RejectUserResponse
   */
  async rejectUser(payload: RejectUserRequest, token: string): Promise<RejectUserResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/rejectUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const errorMessage = data.error || data.message || `Reject user request failed with status: ${response.status}`;
      throw new Error(errorMessage);
    }

    return data;
  },

  /**
   * Approve user registration (admin only)
   * @param payload Request body containing user_id, role_id, and role_code
   * @param token Valid JWT Bearer token
   * @returns ApproveUserResponse
   */
  async approveUser(payload: ApproveUserRequest, token: string): Promise<ApproveUserResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/approveUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const errorMessage = data.error || data.message || `Approve user request failed with status: ${response.status}`;
      throw new Error(errorMessage);
    }

    return data;
  },

  /**
   * Logout — deactivate device
   * @param payload Request body containing device_id and platform
   * @param token Valid JWT Bearer token
   * @returns LogoutResponse indicating operation success
   */
  async logout(payload: LogoutRequest, token: string): Promise<LogoutResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.error || data.message || `Logout request failed with status: ${response.status}`;
      throw new Error(errorMessage);
    }

    return data;
  },

  /**
   * Updates the caller's own Keycloak password and clears the is_first_login flag.
   * @param payload Request body containing new_password
   * @param token Valid JWT Bearer token
   * @returns UpdatePasswordResponse indicating operation success
   */
  async updatePassword(payload: UpdatePasswordRequest, token: string): Promise<UpdatePasswordResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/updatePassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.error || data.message || `Update password request failed with status: ${response.status}`;
      throw new Error(errorMessage);
    }

    return data;
  },

  /**
   * Directly resets a user's Keycloak password (admin / support flow)
   * @param payload Request body containing login_id and new_password
   * @returns ResetPasswordResponse indicating operation success
   */
  async resetPassword(payload: ResetPasswordRequest): Promise<ResetPasswordResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/resetPassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.error || data.message || `Reset password request failed with status: ${response.status}`;
      throw new Error(errorMessage);
    }

    return data;
  },

  /**
   * Request a temporary password
   * @param payload Request body containing the user's login_id (email)
   * @returns ForgotPasswordResponse indicating operation success
   */
  async forgotPassword(payload: ForgotPasswordRequest): Promise<ForgotPasswordResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/forgotPassword`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.error || data.message || `Forgot password request failed with status: ${response.status}`;
      throw new Error(errorMessage);
    }

    return data;
  },

  /**
   * Refresh access token
   * @param payload Request body containing the refresh token
   * @returns RefreshTokenResponse containing new access and refresh tokens
   */
  async refreshToken(payload: RefreshTokenRequest): Promise<RefreshTokenResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/refreshToken`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.error || data.message || `Token refresh failed with status: ${response.status}`;
      throw new Error(errorMessage);
    }

    return data;
  },

  /**
   * Check user registration status
   * @param payload Request body containing emailAddress
   * @returns CheckStatusResponse indicating if user exists and their status
   */
  async checkLoginStatus(payload: CheckStatusRequest): Promise<CheckStatusResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/checkLoginStatus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data.error || data.message || `Status check failed with status: ${response.status}`;
      throw new Error(errorMessage);
    }

    return data;
  },

  /**
   * Authenticate a user via Keycloak Direct Grant
   * @param payload Request body containing login_id and password
   * @returns LoginResponse containing JWT access token, refresh token, and profile data
   */
  async login(payload: LoginRequest): Promise<LoginResponse> {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json'
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      // API might return "error" or "message" on failure based on the Swagger doc
      const errorMessage = data.error || data.message || `Login failed with status: ${response.status}`;
      throw new Error(errorMessage);
    }

    return data;
  }
};
