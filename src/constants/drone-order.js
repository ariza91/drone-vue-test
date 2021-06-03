import i18n from '@/i18n';
import { ASC, DESC } from '@/utils/sort'

export default {
    ageDESC: { key: 'age', label: i18n.t('DroneOrderOptions.ageDesc'), order: DESC },
    ageASC: { key: 'age', label: i18n.t('DroneOrderOptions.ageAsc'), order: ASC },
    batteryDESC: { key: 'batery', label: i18n.t('DroneOrderOptions.batteryDesc'), order: DESC },
    batteryASC: { key: 'batery', label: i18n.t('DroneOrderOptions.batteryAsc'), order: ASC },
}