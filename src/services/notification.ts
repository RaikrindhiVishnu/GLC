import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../store/baseQuery';

const NOTIFICATION_API_BASE_URL = process.env.NEXT_PUBLIC_AUTH_API_URL || 'https://eq3tqsvcw7.execute-api.ap-south-1.amazonaws.com';

export interface NotificationItem {
  id?: number;
  user_notification_id?: number;
  title: string;
  body: string;
  time: string;
  notification_type_id: number;
  is_read: number;
}

export interface GetAllNotificationsRequest {
  user_id: number;
  offset: number;
}

export type GetAllNotificationsResponse = NotificationItem[];

export interface MarkNotificationAsReadRequest {
  UserNotificationIds: number[];
}

export interface MarkNotificationAsReadResponse {
  success: boolean;
  message: string;
  updated_notifications_count?: number;
  updated_user_notifications_count?: number;
}

export interface MarkAllNotificationsAsReadRequest {
  user_id: number;
}

export interface MarkAllNotificationsAsReadResponse {
  message?: string;
  error?: string;
}

export const notificationApi = createApi({
  reducerPath: 'notificationApi',
  baseQuery,
  tagTypes: ['Notification'],
  endpoints: (builder) => ({
    getAllNotificationsByUserId: builder.query<GetAllNotificationsResponse, GetAllNotificationsRequest>({
      query: (payload) => ({
        url: `${NOTIFICATION_API_BASE_URL}/notification/get_all_notification_by_user_id`,
        method: 'POST',
        body: payload,
      }),
      providesTags: ['Notification'],
    }),
    markNotificationAsRead: builder.mutation<MarkNotificationAsReadResponse, MarkNotificationAsReadRequest>({
      query: (payload) => ({
        url: `${NOTIFICATION_API_BASE_URL}/notification/markNotificationAsReadByUserNotificationId`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Notification'],
    }),
    markAllNotificationsAsRead: builder.mutation<MarkAllNotificationsAsReadResponse, MarkAllNotificationsAsReadRequest>({
      query: (payload) => ({
        url: `${NOTIFICATION_API_BASE_URL}/notification/markAllNotificationAsReadByUserId`,
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Notification'],
    }),
  }),
});

export const {
  useGetAllNotificationsByUserIdQuery,
  useMarkNotificationAsReadMutation,
  useMarkAllNotificationsAsReadMutation,
} = notificationApi;
