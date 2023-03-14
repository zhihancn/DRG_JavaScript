import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCQ_DRG} from '../DRG/MDCQ_DRG.js';

export default function QB1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["38.6601","39.1x07","41.2x01","41.2x02","41.2x03","41.2x04","41.3300","41.4100","41.4200x002","41.4300","41.4301","41.5x00","41.5x01","41.9300","41.9301","41.9400","41.9501","41.9502","41.9503","41.9504","41.9900x002","41.9901"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合QB1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCQ_DRG();
        
        if (drg.QB11_group(record)){
            return 'QB11';
        }

        if (drg.QB13_group(record)){
            return 'QB13';
        }

        if (drg.QB15_group(record)){
            return 'QB15';
        }

        return 'QB1';
    }else{
        return '';
    }
}
  