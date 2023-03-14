import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCD_DRG} from '../DRG/MDCD_DRG.js';

export default function DE1_group(record){
    let adrg_zd=[];
    let adrg_zd1=[];
    let adrg_ss=["29.3300x001","29.3300x002","29.3301","29.3900x001","29.3900x007","29.3900x010","29.3900x012","29.3900x017","29.3901","29.3902","29.3903","29.3905","29.3906","29.3907","29.3908","29.3909","29.4x00x003","29.4x00x004","29.4x01","29.4x02","29.4x03","29.4x04","29.5100","29.5200x002","29.5300x002","29.5301","29.5302","29.5400","29.5901","29.9100x001","29.9101","29.9200x001","29.9200x002","30.0100","30.0900x016","30.0900x021","30.0900x024","30.0900x038","30.0900x039","30.0900x040","30.0901","30.0902","30.0903","30.0904","30.0905","30.0906","30.0907","30.0908","30.0909","30.0911","30.2100","30.2100x002","30.2100x003","30.2101","30.2200","30.2201","30.2202","30.2203","30.2204","30.2900x013","30.2900x014","30.2901","30.2902","30.2903","30.2905","30.2906","30.2907","30.2908","30.2909","30.2910","30.2911","30.2912","30.3x01","30.3x03","30.3x04","30.4x00x002","31.0x02","31.0x03","31.0x05","31.1x00x005","31.2100x001","31.2900x001","31.3x00x001","31.3x00x005","31.3x00x008","31.3x01","31.3x02","31.3x03","31.3x04","31.4501","31.5x00x003","31.5x00x012","31.5x00x013","31.5x00x014","31.5x01","31.5x02","31.5x03","31.5x04","31.6100","31.6201","31.6202","31.6300","31.6400","31.6900x007","31.6900x008","31.6900x013","31.6901","31.6902","31.6903","31.6904","31.6905","31.6906","31.6907","31.6908","31.6909","31.6910","31.6911","31.6912","31.6913","31.7100x001","31.7300x001","31.7301","31.7302","31.7500x002","31.7500x004","31.7501","31.7502","31.7503","31.7504","31.7900x004","31.7900x005","31.7900x006","31.7901","31.7902","31.7903","31.7904","31.9201","31.9203","31.9301","31.9302","31.9303","31.9304","31.9500","31.9501","31.9801","31.9802","31.9803","31.9807","31.9808","31.9901","31.9903","31.9904","31.9905"];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && record.ssList && intersect(record.ssList,adrg_ss)){
        putMessage('符合DE1入组条件，匹配规则：某一手术匹配');
        let drg=new MDCD_DRG();
        
        if (drg.DE11_group(record)){
            return 'DE11';
        }

        if (drg.DE13_group(record)){
            return 'DE13';
        }

        if (drg.DE15_group(record)){
            return 'DE15';
        }

        return 'DE1';
    }else{
        return '';
    }
}
  