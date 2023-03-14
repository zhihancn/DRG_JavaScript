import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FF1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["38.4000","38.4200x001","38.4200x002","38.4200x003","38.4201","38.4202","38.4203","38.4300x001","38.4300x002","38.4301","38.4302","38.4304","38.4500x002","38.4600x001","38.4600x003","38.4601","38.4602","38.4603","38.4604","38.4800x001","38.4800x002","38.4801","38.4802","38.4803","38.4804","38.4805","39.0x03","39.2200x002","39.2200x003","39.2200x004","39.2200x005","39.2200x006","39.2200x011","39.2200x014","39.2200x018","39.2200x019","39.2202","39.2205","39.2206","39.2208","39.2209","39.2210","39.2211","39.2500x005","39.2500x012","39.2500x015","39.2504","39.2506","39.2600x002","39.2600x003","39.2600x004","39.2600x007","39.2600x009","39.2600x010","39.2602","39.2604","39.2605","39.2607","39.2900x001","39.2900x002","39.2900x003","39.2900x004","39.2900x005","39.2900x010","39.2900x017","39.2900x019","39.2900x024","39.2900x025","39.2900x026","39.2900x027","39.2900x030","39.2900x031","39.2900x032","39.2900x033","39.2900x034","39.2900x035","39.2900x036","39.2900x037","39.2900x038","39.2900x039","39.2900x040","39.2900x041","39.2900x042","39.2900x043","39.2900x046","39.2900x047","39.2900x048","39.2900x049","39.2902","39.2903","39.2904","39.2905","39.2906","39.2907","39.2908","39.2909","39.2910","39.2911","39.2912","39.2913","39.2914","39.2915","39.2916"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合FF1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FF11_group(record)){
            return 'FF11';
        }

        if (drg.FF13_group(record)){
            return 'FF13';
        }

        if (drg.FF15_group(record)){
            return 'FF15';
        }

        return 'FF1';
    }else{
        return '';
    }
}
  