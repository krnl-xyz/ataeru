import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors, BorderRadius, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface ActivityGoalProps {
  icon: string;
  value: string;
  label: string;
  percentage: number;
  cardColor: string;
}

function ActivityGoal({ icon, value, label, percentage, cardColor }: ActivityGoalProps) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <View style={[styles.activityGoalCard, { backgroundColor: cardColor }]}>
      <View style={styles.activityGoalContent}>
        <View style={[styles.activityIconContainer, { backgroundColor: cardColor }]}>
          <IconSymbol name={icon} size={20} color={theme.text} />
        </View>
        <View style={styles.activityGoalText}>
          <Text style={[styles.activityValue, { color: theme.text }]}>{value}</Text>
          <Text style={[styles.activityLabel, { color: theme.textSecondary }]}>{label}</Text>
        </View>
      </View>
      <View style={styles.progressContainer}>
        <View style={[styles.progressCircle, { borderColor: theme.border }]}>
          <View
            style={[
              styles.progressFill,
              {
                backgroundColor: theme.primary,
                height: `${percentage}%`,
              },
            ]}
          />
        </View>
        <View style={styles.percentageContainer}>
          <Text style={[styles.percentageText, { color: theme.text }]}>{percentage}%</Text>
        </View>
      </View>
    </View>
  );
}

interface WorkoutCardProps {
  title: string;
  image?: string;
  stats: Array<{ icon: string; value: string }>;
  tag: string;
  tagColor: string;
}

function WorkoutCard({ title, stats, tag, tagColor }: WorkoutCardProps) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <TouchableOpacity
      style={[styles.workoutCard, { backgroundColor: theme.surface }]}
      activeOpacity={0.7}>
      <View style={[styles.workoutImage, { backgroundColor: theme.border }]}>
        <IconSymbol name="figure.run" size={24} color={theme.textSecondary} />
      </View>
      <View style={styles.workoutContent}>
        <Text style={[styles.workoutTitle, { color: theme.text }]}>{title}</Text>
        <View style={styles.workoutStats}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.workoutStat}>
              <IconSymbol name={stat.icon} size={14} color={theme.textSecondary} />
              <Text style={[styles.workoutStatText, { color: theme.textSecondary }]}>
                {stat.value}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={[styles.workoutTag, { backgroundColor: tagColor }]}>
        <Text style={[styles.workoutTagText, { color: theme.text }]}>{tag}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function HealthPlansScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
      edges={['top']}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <IconSymbol name="chevron.left" size={24} color={theme.text} />
          </TouchableOpacity>
          <TouchableOpacity>
            <IconSymbol name="bell" size={24} color={theme.text} />
          </TouchableOpacity>
        </View>

        {/* Title */}
        <View style={styles.titleSection}>
          <Text style={[styles.title, { color: theme.text }]}>
            Stay active and hit your goals
          </Text>
        </View>

        {/* Activity Goals Section */}
        <View style={[styles.section, styles.healthSection]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>Activity Goals</Text>

          <View style={styles.activityGoalsContainer}>
            <ActivityGoal
              icon="heart.fill"
              value="3,203"
              label="Steps"
              percentage={53}
              cardColor={theme.heartRateCard}
            />
            <ActivityGoal
              icon="flame.fill"
              value="2,200"
              label="Calories burned"
              percentage={20}
              cardColor={theme.stepsCard}
            />
            <ActivityGoal
              icon="clock.fill"
              value="30 mins"
              label="Active minutes"
              percentage={83}
              cardColor={theme.sleepCard}
            />
          </View>
        </View>

        {/* Upcoming Workout Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>Upcoming workout</Text>
            <TouchableOpacity>
              <Text style={[styles.seeAllLink, { color: theme.primary }]}>See all</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.workoutsContainer}>
            <WorkoutCard
              title="Jogging"
              stats={[
                { icon: 'target', value: '70%' },
                { icon: 'clock', value: '15 mins' },
              ]}
              tag="Warm Up"
              tagColor={theme.heartRateCard}
            />
            <WorkoutCard
              title="Boxing"
              stats={[
                { icon: 'target', value: '23%' },
                { icon: 'number', value: '4 Set' },
                { icon: 'arrow.repeat', value: '8 Reps' },
              ]}
              tag="Workout"
              tagColor={theme.stepsCard}
            />
          </View>
        </View>
      </ScrollView>
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
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  titleSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  title: {
    fontSize: 28,
    fontFamily: Fonts.bold,
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
  activityGoalsContainer: {
    gap: 12,
  },
  activityGoalCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: BorderRadius.large,
    marginBottom: 12,
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
  activityGoalContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  activityIconContainer: {
    width: 44,
    height: 44,
    borderRadius: BorderRadius.round,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityGoalText: {
    flex: 1,
  },
  activityValue: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    marginBottom: 4,
  },
  activityLabel: {
    fontSize: 14,
    fontFamily: Fonts.medium,
  },
  progressContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    position: 'relative',
  },
  progressCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    position: 'absolute',
  },
  progressFill: {
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  percentageContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
  },
  percentageText: {
    fontSize: 12,
    fontFamily: Fonts.semiBold,
  },
  workoutsContainer: {
    gap: 12,
  },
  workoutCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: BorderRadius.large,
    gap: 12,
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
  workoutImage: {
    width: 56,
    height: 56,
    borderRadius: BorderRadius.round,
    justifyContent: 'center',
    alignItems: 'center',
  },
  workoutContent: {
    flex: 1,
  },
  workoutTitle: {
    fontSize: 18,
    fontFamily: Fonts.semiBold,
    marginBottom: 8,
  },
  workoutStats: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
  },
  workoutStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  workoutStatText: {
    fontSize: 12,
    fontFamily: Fonts.medium,
  },
  workoutTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: BorderRadius.round,
  },
  workoutTagText: {
    fontSize: 12,
    fontFamily: Fonts.semiBold,
  },
});
