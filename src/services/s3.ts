import { API_BASE_URL } from './mail'; // reusing base url

export interface UploadFileResponse {
  url?: string;
  key?: string;
  success?: boolean;
  message?: string;
}

export interface MultipartStartRequest {
  filename: string;
  contentType: string;
}

export interface MultipartStartResponse {
  uploadId: string;
  key: string;
}

export interface MultipartGetUrlsRequest {
  key: string;
  uploadId: string;
  parts: number;
}

export interface MultipartGetUrlsResponse {
  presignedUrls: string[];
}

export interface MultipartCompleteRequest {
  key: string;
  uploadId: string;
  partsArray: Array<{ ETag: string; PartNumber: number }>;
}

export interface MultipartCompleteResponse {
  success?: boolean;
}

export interface GenerateUrlRequest {
  key: string;
  filename: string;
  folderPath: string;
}

export interface GenerateUrlResponse {
  url?: string;
}

export const s3Service = {
  /**
   * Direct single file upload (memory proxy)
   */
  async uploadFile(file: File): Promise<UploadFileResponse> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${API_BASE_URL}/s3/uploadFile`, {
      method: 'POST',
      headers: {
        'accept': '*/*'
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Upload failed with status: ${response.status}`);
    }

    return response.json();
  },

  /**
   * Initiate a multipart upload
   */
  async multipartStart(payload: MultipartStartRequest): Promise<MultipartStartResponse> {
    const response = await fetch(`${API_BASE_URL}/s3/multipart/start`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error('Failed to start multipart upload');
    return response.json();
  },

  /**
   * Get pre-signed URLs for parts of a multipart upload
   */
  async multipartGetUrls(payload: MultipartGetUrlsRequest): Promise<MultipartGetUrlsResponse> {
    const response = await fetch(`${API_BASE_URL}/s3/multipart/getUrls`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error('Failed to get presigned URLs');
    return response.json();
  },

  /**
   * Complete a multipart upload
   */
  async multipartComplete(payload: MultipartCompleteRequest): Promise<MultipartCompleteResponse> {
    const response = await fetch(`${API_BASE_URL}/s3/multipart/complete`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error('Failed to complete multipart upload');
    return response.json();
  },

  /**
   * Generate a CloudFront signed URL for viewing/downloading a file
   */
  async generateUrl(payload: GenerateUrlRequest): Promise<GenerateUrlResponse> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'accept': '*/*'
    };
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    const response = await fetch(`${API_BASE_URL}/s3/generateUrl`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error('Failed to generate URL');
    return response.json();
  }
};
