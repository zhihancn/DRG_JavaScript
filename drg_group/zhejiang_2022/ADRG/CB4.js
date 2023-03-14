import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCC_DRG} from '../DRG/MDCC_DRG.js';

export default function CB4_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["12.3505","12.4201","12.4300x001","12.5200x001","12.5300","12.5400","12.5501","12.5900x001","12.5901","12.6400x001","12.6400x003","12.6400x009","12.6400x010","12.6401","12.6402","12.6403","12.6404","12.6405","12.6406","12.6407","12.6408","12.6500x004","12.6601","12.6700x002","12.6700x003","12.6700x004","12.6700x010","12.6701","12.6702","12.6703","12.6704","12.7100","12.7200","12.7300","12.7401","12.7901","12.7902","12.7903","12.7904","12.9100x002","12.9100x004","12.9301","12.9302","12.9801","12.9802","12.9803","12.9900x004","12.9900x008","12.9900x009","12.9901","12.9903","12.9904","12.9905","14.2700x001"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合CB4入组条件，匹配规则：某一手术匹配');
        let drg=new MDCC_DRG();
        
        if (drg.CB41_group(record)){
            return 'CB41';
        }

        if (drg.CB43_group(record)){
            return 'CB43';
        }

        if (drg.CB45_group(record)){
            return 'CB45';
        }

        return 'CB4';
    }else{
        return '';
    }
}
  