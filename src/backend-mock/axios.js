
import { drones } from '@/backend-mock/drones.json';
import { reports } from '@/backend-mock/data.json';

const timeout = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export default {
    get: async (url) => {
        await timeout(2000);

        if (url.includes('/drones'))
            return { data: drones };

        if (url.includes('/drone/')) {
            const id = Number(url.split('/').slice(-1)[0])
            const drone = drones.find((drone) => drone.id === id);
            if (!drone) return Promise.reject({ statusCode: 404, error: 'DRONE_NOT_FOUND' })
            const report = reports.filter(({ drone_id }) => drone_id === drone.id);
            return { data: { ...drone, report } };
        }
    }
}