import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCW_DRG} from '../DRG/MDCW_DRG.js';

export default function WJ1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true){
        putMessage('符合WJ1入组条件，匹配规则：');
        let drg=new MDCW_DRG();
        
        if (drg.WJ19_group(record)){
            return 'WJ19';
        }

        return 'WJ1';
    }else{
        return '';
    }
}
  