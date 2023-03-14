import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCI_DRG} from '../DRG/MDCI_DRG.js';

export default function IB2_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["78.0900x008","78.0900x009","78.0900x010","78.0900x011","78.0900x013","78.0900x015","78.0900x018","78.0900x019","78.0904","81.0100x001","81.0101","81.0102","81.0103","81.0104","81.0105","81.0200x001","81.0200x002","81.0300x001","81.0300x002","81.0400x004","81.0400x005","81.0401","81.0402","81.0500x005","81.0500x006","81.0501","81.0502","81.0600x005","81.0600x006","81.0601","81.0602","81.0700x002","81.0701","81.0702","81.0800x016","81.0800x017","81.0800x018","81.0801","81.0802","81.3101","81.3102","81.3103","81.3104","81.3105","81.3106","81.3200x001","81.3200x002","81.3300x001","81.3300x002","81.3400x003","81.3400x004","81.3401","81.3402","81.3500x003","81.3500x004","81.3501","81.3502","81.3600x003","81.3600x004","81.3601","81.3602","81.3700x001","81.3700x002","81.3701","81.3702","81.3800x003","81.3800x004","81.3800x005","81.3801","81.3802","81.3900","81.6200","81.6300","81.6400x003","84.5100x002","84.5100x003","84.5100x004","84.5100x005","84.5100x006"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合IB2入组条件，匹配规则：某一手术匹配');
        let drg=new MDCI_DRG();
        
        if (drg.IB21_group(record)){
            return 'IB21';
        }

        if (drg.IB23_group(record)){
            return 'IB23';
        }

        if (drg.IB25_group(record)){
            return 'IB25';
        }

        return 'IB2';
    }else{
        return '';
    }
}
  