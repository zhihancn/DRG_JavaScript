import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCI_DRG} from '../DRG/MDCI_DRG.js';

export default function ID1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["77.5200","77.5900x001","79.7801","79.7802","79.8801","79.8802","79.8803","80.0800x001","80.0800x002","80.0801","80.1800x003","80.1801","80.1802","80.4400x005","80.4800x002","80.4800x005","80.4801","80.4802","80.4803","80.4804","80.7800","80.7800x002","80.7801","80.8800x003","80.8800x004","80.8801","80.8802","80.9800","80.9800x001","80.9900x002","81.1200x001","81.1300x003","81.1401","81.1500","81.1600","81.1700x001","81.1700x003","81.1800","81.5700x001","81.5700x002","81.9301","81.9302","81.9403","81.9404","81.9501","81.9502","81.9600x009","81.9600x015","81.9600x017","81.9600x018","81.9600x019","84.1101"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合ID1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCI_DRG();
        
        if (drg.ID11_group(record)){
            return 'ID11';
        }

        if (drg.ID13_group(record)){
            return 'ID13';
        }

        if (drg.ID15_group(record)){
            return 'ID15';
        }

        return 'ID1';
    }else{
        return '';
    }
}
  