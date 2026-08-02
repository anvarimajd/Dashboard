import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.row}>
          <View style={styles.avatar}><Text style={styles.avatarText}>A</Text></View>
          <Text style={styles.headerTitle}>پروژه‌های من</Text>
        </View>
        <TouchableOpacity style={styles.iconBtn}><Text style={styles.btnText}>⚙️</Text></TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        <View style={styles.row}>
          <View style={[styles.card, styles.flex1]}>
            <Text style={styles.statNum}>12</Text>
            <Text style={styles.label}>در حال انجام</Text>
          </View>
          <View style={[styles.card, styles.flex1]}>
            <Text style={styles.statNum}>28</Text>
            <Text style={styles.label}>تکمیل شده</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>دسته‌بندی‌ها</Text>
        <View style={styles.grid}>
          <View style={styles.gridCard}>
            <Text style={styles.cardTitle}>طراحی UI</Text>
            <Text style={styles.label}>۸ پروژه</Text>
          </View>
          <View style={styles.gridCard}>
            <Text style={styles.cardTitle}>توسعه وب</Text>
            <Text style={styles.label}>۱۲ پروژه</Text>
          </View>
          <View style={styles.gridCard}>
            <Text style={styles.cardTitle}>موبایل</Text>
            <Text style={styles.label}>۵ پروژه</Text>
          </View>
          <View style={styles.gridCard}>
            <Text style={styles.cardTitle}>دیزاین سیستم</Text>
            <Text style={styles.label}>۳ پروژه</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View style={[styles.row, styles.spaceBetween]}>
            <Text style={styles.cardTitle}>ظرفیت سرور</Text>
            <Text style={styles.statNum}>70%</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={styles.progressFill} />
          </View>
        </View>

      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.center}><Text style={styles.activeText}>🏠</Text></TouchableOpacity>
        <TouchableOpacity style={styles.center}><Text style={styles.btnText}>📊</Text></TouchableOpacity>
        <TouchableOpacity style={styles.center}><Text style={styles.btnText}>👤</Text></TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  content: {
    padding: 16,
    gap: 16,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#1e293b',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: { color: '#fff', fontWeight: 'bold' },
  headerTitle: { color: '#f8fafc', fontSize: 16, fontWeight: 'bold' },
  iconBtn: { padding: 8 },

  card: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    gap: 6,
  },
  statNum: { color: '#38bdf8', fontSize: 20, fontWeight: 'bold' },
  label: { color: '#64748b', fontSize: 12 },
  cardTitle: { color: '#f8fafc', fontSize: 14, fontWeight: '600' },
  sectionTitle: { color: '#94a3b8', fontSize: 13, marginTop: 8 },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  gridCard: {
    width: '48%',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 14,
    gap: 4,
  },
  progressTrack: {
    height: 6,
    backgroundColor: '#0f172a',
    borderRadius: 3,
    marginTop: 8,
    flexDirection: 'row',
  },
  progressFill: {
    flex: 0.7,
    backgroundColor: '#38bdf8',
    borderRadius: 3,
  },

  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 56,
    backgroundColor: '#0f172a',
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
  },
  btnText: { fontSize: 18, opacity: 0.5 },
  activeText: { fontSize: 18 },
});
