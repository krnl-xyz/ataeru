/**
 * Health App Theme Colors
 * Light mode uses colors from the design (light blue, light purple, light green)
 * Dark mode uses complementary colors for better contrast and readability
 */

import { Platform } from 'react-native';

export const Colors = {
  light: {
    // Base colors
    text: '#11181C',
    textSecondary: '#687076',
    background: '#F5F5F5',
    surface: '#FFFFFF',
    border: '#E0E0E0',
    
    // Health card colors
    heartRateCard: '#E3F2FD', // Light blue
    stepsCard: '#F3E5F5', // Light purple
    sleepCard: '#E8F5E9', // Light green
    
    // Accent colors
    primary: '#1976D2', // Blue
    secondary: '#7B1FA2', // Purple
    success: '#388E3C', // Green
    
    // Tab bar
    tint: '#000000',
    icon: '#000000',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: '#000000',
    tabBarBackground: '#FFFFFF',
    
    // Notification badge
    notificationBadge: '#FF3B30',
  },
  dark: {
    // Base colors
    text: '#FFFFFF',
    textSecondary: '#9BA1A6',
    background: '#000000',
    surface: '#1C1C1E',
    border: '#38383A',
    
    // Health card colors (complementary darker versions)
    heartRateCard: '#1A237E', // Dark blue
    stepsCard: '#4A148C', // Dark purple
    sleepCard: '#1B5E20', // Dark green
    
    // Accent colors
    primary: '#64B5F6', // Light blue
    secondary: '#BA68C8', // Light purple
    success: '#66BB6A', // Light green
    
    // Tab bar
    tint: '#FFFFFF',
    icon: '#FFFFFF',
    tabIconDefault: '#8E8E93',
    tabIconSelected: '#FFFFFF',
    tabBarBackground: '#1C1C1E',
    
    // Notification badge
    notificationBadge: '#FF453A',
  },
};

export const BorderRadius = {
  small: 8,
  medium: 12,
  large: 16,
  xlarge: 20,
  round: 9999,
};

export const Fonts = {
  regular: 'Inter',
  medium: 'Inter-Medium',
  semiBold: 'Inter-SemiBold',
  bold: 'Inter-Bold',
};
