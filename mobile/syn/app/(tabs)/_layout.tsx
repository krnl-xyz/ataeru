import { Icon, Label, NativeTabs } from 'expo-router/unstable-native-tabs';
import React from 'react';
import { DynamicColorIOS, Platform } from 'react-native';

export default function TabLayout() {
  return (
    <NativeTabs
      labelStyle={{
        color: Platform.OS === 'ios'
          ? DynamicColorIOS({
            dark: 'white',
            light: 'black',
          })
          : undefined,
      }}
      tintColor={
        Platform.OS === 'ios'
          ? DynamicColorIOS({
            dark: '#64B5F6',
            light: '#1976D2',
          })
          : '#1976D2'
      }>
      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon sf={{ default: 'house', selected: 'house.fill' }} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="health-plans">
        <Label>Health Plans</Label>
        <Icon sf={{ default: 'target', selected: 'target' }} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="streaks">
        <Label>Streaks</Label>
        <Icon sf={{ default: 'flame', selected: 'flame.fill' }} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="ai-chat">
        <Label>AI Chat</Label>
        <Icon sf={{ default: 'bubble.left', selected: 'bubble.left.fill' }} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
