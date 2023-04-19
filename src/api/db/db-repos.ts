import { DbRepos } from '../../types';
import { Knex } from 'knex';


const createRepo = (knex: Knex) : DbRepos => {
    console.log('createRepo()');
    return {
        product: {
            createData : async (data: any) => {
                return await knex('advertiser').insert({ data },'advertiser_id');
            },
            getData: async () => {
                return await knex.from('advertiser').select(['advertiser_id','advertiser_name','advertiser_contact_info', 'advertiser_legal_info']);
            },
            updateData: async (advertiserId: number, data: any) => {
                return await knex.from('advertiser').update(data,'*').where('advertiser_id',advertiserId);
            }
        },
    }
}

export default createRepo;