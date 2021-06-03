import i18n from '@/i18n';
import moment from "moment";

export const sortOptions = {
    sortBy: 'time',
    sortDesc: true,
    roundValues: {
        speed: (value) => Number(value).toFixed(1),
        latitude: (value) => Number(value).toFixed(6),
        longitude: (value) => Number(value).toFixed(6),
    }
}

export default [
    {
        key: "time",
        label: i18n.t('DroneColumns.time'),
        sortable: true,
        formatter: (value) => moment(value).format("MM/DD/YYYY HH:mm a"),
    },
    {
        key: "speed",
        label: i18n.t('DroneColumns.speed'),
        sortable: true,
    },
    {
        key: "latitude",
        label: i18n.t('DroneColumns.latitude'),
        sortable: true,
    },
    {
        key: "longitude",
        label: i18n.t('DroneColumns.longitude'),
        sortable: true,
    },
    {
        key: "traffic_conditions",
        label: i18n.t('DroneColumns.traffic'),
        sortable: true,
    },
]