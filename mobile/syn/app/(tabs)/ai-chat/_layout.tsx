import { Stack } from 'expo-router';
import React from 'react';

export default function AIChatLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerBackTitleVisible: false,
        headerTitle: 'AI Chat',
        headerLargeTitle: false,
        presentation: 'card',
      }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          tabBarStyle: { display: 'none' },
        }}
      />
    </Stack>
  );
}

