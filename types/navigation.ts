// Типы для навигации
export type TabKey = 'home' | 'saved' | 'chat' | 'profile';

export interface TabItem {
  key: TabKey;
  label: string;
  route: string;
}

export interface NavigationProps {
  activeTab: TabKey;
} 