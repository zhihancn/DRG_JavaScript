import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FM1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["36.0601","36.0602","36.0700x004","36.0701"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合FM1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FM11_group(record)){
            return 'FM11';
        }

        if (drg.FM13_group(record)){
            return 'FM13';
        }

        if (drg.FM15_group(record)){
            return 'FM15';
        }

        return 'FM1';
    }else{
        return '';
    }
}
  