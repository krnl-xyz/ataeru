import { IconSymbol } from '@/components/ui/icon-symbol';
import { BorderRadius, Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import BottomSheet, { BottomSheetBackdrop, BottomSheetView } from '@gorhom/bottom-sheet';
import { useRouter } from 'expo-router';
import React, { useCallback, useRef, useState } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HealthCardProps {
  title: string;
  value: string;
  icon: any;
  cardColor: string;
  children?: React.ReactNode;
}

function HealthCard({ title, value, icon, cardColor, children }: HealthCardProps) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <View style={[styles.healthCard, { backgroundColor: cardColor }]}>
      <View style={styles.cardHeader}>
        <IconSymbol name={icon} size={20} color={theme.text} />
        <View style={styles.cardContent}>
          <Text style={[styles.cardValue, { color: theme.text }]}>{value}</Text>
          <Text style={[styles.cardTitle, { color: theme.textSecondary }]}>{title}</Text>
        </View>
      </View>
      {children && <View style={styles.cardChart}>{children}</View>}
    </View>
  );
}

function RecommendationCard() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <TouchableOpacity
      style={[styles.recommendationCard, { backgroundColor: theme.surface }]}
      activeOpacity={0.7}>
      <View style={[styles.recommendationIcon, { backgroundColor: theme.heartRateCard }]}>
        <IconSymbol name="drop" size={20} color={theme.primary} />
      </View>
      <View style={styles.recommendationContent}>
        <Text style={[styles.recommendationTitle, { color: theme.text }]}>
          Stay Hydrated!
        </Text>
        <Text style={[styles.recommendationDescription, { color: theme.textSecondary }]}>
          Drink at least 2L of water today.
        </Text>
      </View>
      <IconSymbol name="chevron.right" size={20} color={theme.textSecondary} />
    </TouchableOpacity>
  );
}

function SimpleBarChart({ data, color }: { data: number[]; color: string }) {
  const maxValue = Math.max(...data);

  return (
    <View style={styles.barChart}>
      {data.map((value, index) => (
        <View
          key={index}
          style={[
            styles.bar,
            {
              height: `${(value / maxValue) * 100}%`,
              backgroundColor: color,
            },
          ]}
        />
      ))}
    </View>
  );
}

function LineChart({ data, color }: { data: number[]; color: string }) {
  return (
    <View style={styles.lineChart}>
      {data.map((value, index) => (
        <View
          key={index}
          style={[
            styles.linePoint,
            {
              left: `${(index / (data.length - 1)) * 100}%`,
              bottom: `${value}%`,
              backgroundColor: color,
            },
          ]}
        />
      ))}
    </View>
  );
}

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];
  const router = useRouter();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [snapPoints] = useState(['50%', '75%']);

  const handleOpenBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const handleCloseBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
      />
    ),
    []
  );

  const heartRateData = [60, 65, 70, 72, 68, 75, 72];
  const stepsData = [20, 40, 30, 50, 45, 60, 55];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.profileSection}
            onPress={handleOpenBottomSheet}
            activeOpacity={0.7}>
            <View style={[styles.profileImage, { backgroundColor: theme.border }]}>
              <IconSymbol name="person.fill" size={24} color={theme.textSecondary} />
            </View>
            <Text style={[styles.greeting, { color: theme.text }]}>Hello Samantha</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/(tabs)/settings')}>
            <IconSymbol name="gearshape" size={24} color={theme.text} />
          </TouchableOpacity>
        </View>

        {/* Health at a glance section */}
        <View style={[styles.section, styles.healthSection]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Here&apos;s your health at a glance
          </Text>

          <View style={styles.healthCardsRow}>
            <View style={styles.halfCard}>
              <HealthCard
                title="Heart rate"
                value="72 bpm"
                icon="heart.fill"
                cardColor={theme.heartRateCard}>
                <SimpleBarChart data={heartRateData} color={theme.text} />
              </HealthCard>
            </View>

            <View style={styles.halfCard}>
              <HealthCard
                title="Steps"
                value="2,200"
                icon="arrow.up.right"
                cardColor={theme.stepsCard}>
                <LineChart data={stepsData} color={theme.secondary} />
              </HealthCard>
            </View>
          </View>

          <View style={styles.fullCard}>
            <HealthCard
              title="Total sleep"
              value="9h 30m"
              icon="moon.fill"
              cardColor={theme.sleepCard}>
              <View style={styles.sleepChartContainer}>
                <View style={styles.sleepChart}>
                  {['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm'].map(
                    (time, index) => {
                      const isActive = time === '11am';
                      return (
                        <View key={time} style={styles.sleepBarContainer}>
                          <View
                            style={[
                              styles.sleepBar,
                              {
                                backgroundColor: theme.text,
                                opacity: isActive ? 1 : 0.4,
                                height: isActive ? 60 : 20,
                              },
                            ]}
                          />
                          <Text style={[styles.sleepTimeLabel, { color: theme.textSecondary }]}>
                            {time}
                          </Text>
                        </View>
                      );
                    },
                  )}
                </View>
              </View>
            </HealthCard>
          </View>
        </View>

        {/* Daily recommendations section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              Daily recommendations
            </Text>
            <TouchableOpacity>
              <Text style={[styles.seeAllLink, { color: theme.primary }]}>See all</Text>
            </TouchableOpacity>
          </View>

          <RecommendationCard />
        </View>
      </ScrollView>

      {/* Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
        backgroundStyle={{ backgroundColor: theme.surface }}
        handleIndicatorStyle={{ backgroundColor: theme.border }}>
        <BottomSheetView style={[styles.bottomSheetContent, { backgroundColor: theme.surface }]}>
          <View style={[styles.bottomSheetHeader, { borderBottomColor: theme.border }]}>
            <Text style={[styles.bottomSheetTitle, { color: theme.text }]}>Profile</Text>
            <TouchableOpacity onPress={handleCloseBottomSheet}>
              <IconSymbol name="xmark" size={20} color={theme.text} />
            </TouchableOpacity>
          </View>

          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={[styles.menuItem, { borderBottomColor: theme.border, borderBottomWidth: 1 }]}
              onPress={() => {
                handleCloseBottomSheet();
                // Navigate to health details
              }}
              activeOpacity={0.7}>
              <IconSymbol name="heart.fill" size={24} color={theme.text} />
              <Text style={[styles.menuItemText, { color: theme.text }]}>Health Details</Text>
              <IconSymbol name="chevron.right" size={20} color={theme.textSecondary} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuItem, { borderBottomColor: theme.border, borderBottomWidth: 1 }]}
              onPress={() => {
                handleCloseBottomSheet();
                // Navigate to health record
              }}
              activeOpacity={0.7}>
              <IconSymbol name="doc.text.fill" size={24} color={theme.text} />
              <Text style={[styles.menuItemText, { color: theme.text }]}>Health Record</Text>
              <IconSymbol name="chevron.right" size={20} color={theme.textSecondary} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuItem, { borderBottomColor: theme.border, borderBottomWidth: 1 }]}
              onPress={() => {
                handleCloseBottomSheet();
                // Handle export
              }}
              activeOpacity={0.7}>
              <IconSymbol name="square.and.arrow.up" size={24} color={theme.text} />
              <Text style={[styles.menuItemText, { color: theme.text }]}>Export Health Data</Text>
              <IconSymbol name="chevron.right" size={20} color={theme.textSecondary} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuItem, { borderBottomColor: theme.border, borderBottomWidth: 1 }]}
              onPress={() => {
                handleCloseBottomSheet();
                // Handle add data
              }}
              activeOpacity={0.7}>
              <IconSymbol name="plus.circle.fill" size={24} color={theme.text} />
              <Text style={[styles.menuItemText, { color: theme.text }]}>Mint / Add Health Data</Text>
              <IconSymbol name="chevron.right" size={20} color={theme.textSecondary} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.menuItem, { borderBottomColor: theme.border, borderBottomWidth: 1 }]}
              onPress={() => {
                handleCloseBottomSheet();
                // Navigate to edit profile
              }}
              activeOpacity={0.7}>
              <IconSymbol name="person.circle.fill" size={24} color={theme.text} />
              <Text style={[styles.menuItemText, { color: theme.text }]}>Edit Profile</Text>
              <IconSymbol name="chevron.right" size={20} color={theme.textSecondary} />
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: Platform.OS === 'ios' ? 100 : 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: BorderRadius.round,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
    fontFamily: Fonts.semiBold,
  },
  section: {
    paddingHorizontal: 24,
    marginTop: 24,
    marginBottom: 24,
  },
  healthSection: {
    marginBottom: 40,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: Fonts.bold,
    marginBottom: 16,
  },
  seeAllLink: {
    fontSize: 16,
    fontFamily: Fonts.medium,
  },
  healthCardsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  halfCard: {
    flex: 1,
  },
  fullCard: {
    width: '100%',
  },
  healthCard: {
    borderRadius: BorderRadius.large,
    padding: 20,
    minHeight: 140,
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    // Android shadow
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardValue: {
    fontSize: 24,
    fontFamily: Fonts.bold,
    marginBottom: 4,
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: Fonts.medium,
  },
  cardChart: {
    marginTop: 8,
    height: 40,
    overflow: 'hidden',
  },
  barChart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: '100%',
    gap: 4,
  },
  bar: {
    flex: 1,
    borderRadius: BorderRadius.small / 4,
    minHeight: 4,
  },
  lineChart: {
    flexDirection: 'row',
    height: '100%',
    position: 'relative',
  },
  linePoint: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    position: 'absolute',
  },
  sleepChartContainer: {
    marginTop: 8,
    overflow: 'hidden',
  },
  sleepChart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    minHeight: 80,
    paddingHorizontal: 4,
  },
  sleepBarContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    minHeight: 80,
    paddingHorizontal: 2,
  },
  sleepBar: {
    width: '85%',
    borderRadius: BorderRadius.small / 2,
    marginBottom: 4,
    minHeight: 4,
    maxHeight: 60,
  },
  sleepTimeLabel: {
    fontSize: 10,
    fontFamily: Fonts.medium,
  },
  recommendationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: BorderRadius.large,
    gap: 12,
  },
  recommendationIcon: {
    width: 44,
    height: 44,
    borderRadius: BorderRadius.round,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recommendationContent: {
    flex: 1,
  },
  recommendationTitle: {
    fontSize: 16,
    fontFamily: Fonts.semiBold,
    marginBottom: 4,
  },
  recommendationDescription: {
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  bottomSheetContent: {
    flex: 1,
    paddingHorizontal: 24,
  },
  bottomSheetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    marginBottom: 8,
  },
  bottomSheetTitle: {
    fontSize: 24,
    fontFamily: Fonts.bold,
  },
  menuContainer: {
    paddingTop: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 12,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: BorderRadius.round,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.medium,
  },
});
