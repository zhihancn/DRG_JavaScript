import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCN_DRG} from '../DRG/MDCN_DRG.js';

export default function NB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["48.7301","48.7303","57.8305","57.8400x004","57.8400x005","57.8402","57.8403","57.8404","57.8405","65.3900x002","65.5100x003","66.4x01","66.5101","66.6100x001","67.4x00x006","67.4x03","67.4x07","67.6201","67.6202","68.2907","68.2918","68.5100x005","68.5101","68.5103","68.5900x002","68.7901","69.2200x006","69.2200x007","69.2200x008","69.2200x009","69.2200x010","69.2200x011","69.2200x012","69.2200x013","69.2200x014","69.2200x015","69.2200x016","69.2200x017","69.2200x018","69.2200x019","69.2200x020","69.2200x021","69.2200x022","69.2200x023","69.2200x024","69.2200x025","69.2200x030","69.2201","69.2202","69.2203","69.2204","69.2205","69.2206","69.2207","69.2208","69.2209","69.2210","69.2211","69.2212","69.2300","69.2901","70.4x00x001","70.4x01","70.4x02","70.4x03","70.4x04","70.4x05","70.5001","70.5002","70.5100","70.5101","70.5102","70.5200","70.5201","70.5202","70.5300x001","70.5300x002","70.5301","70.5302","70.5303","70.5304","70.5305","70.5400x001","70.5400x002","70.5500x001","70.5500x002","70.6100","70.6101","70.6200x001","70.6200x002","70.6300x001","70.6300x002","70.6300x003","70.6301","70.6400x001","70.7200","70.7300","70.7400x001","70.7401","70.7501","70.7700x004","70.7701","70.7702","70.7703","70.7800x001","70.7800x002","70.7801","70.7802","70.7900x010","70.7901","70.7902","70.7903","70.7904","70.7905","70.7906","70.7909","70.8x00","70.9100x001","70.9200x001","70.9201","70.9300x001","70.9400x001","70.9400x002","70.9400x003","70.9500x001","71.4x05","71.6200","71.6200x002","71.7201","71.7202","71.7900x008","71.7900x009","71.7900x010","71.7900x011","71.7900x013","71.7901","71.7903","71.7904"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合NB1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCN_DRG();
        
        if (drg.NB11_group(record)){
            return 'NB11';
        }

        if (drg.NB13_group(record)){
            return 'NB13';
        }

        if (drg.NB15_group(record)){
            return 'NB15';
        }

        return 'NB1';
    }else{
        return '';
    }
}
  