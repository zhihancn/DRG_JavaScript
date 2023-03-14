import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCF_DRG} from '../DRG/MDCF_DRG.js';

export default function FV1_group(record){
    let adrg_zd=["I27.801","I49.805","Q20.000","Q20.100","Q20.101","Q20.200","Q20.200x002","Q20.300","Q20.300x002","Q20.301","Q20.302","Q20.400","Q20.500","Q20.500x001","Q20.600","Q20.600x001","Q20.601","Q20.800x003","Q20.801","Q20.802","Q20.900","Q21.000","Q21.100","Q21.100x001","Q21.101","Q21.102","Q21.103","Q21.104","Q21.105","Q21.106","Q21.200","Q21.201","Q21.202","Q21.203","Q21.204","Q21.205","Q21.206","Q21.300x001","Q21.300x002","Q21.300x003","Q21.400x001","Q21.800","Q21.800x003","Q21.802","Q21.804","Q21.805","Q21.900","Q22.000","Q22.100","Q22.102","Q22.200","Q22.301","Q22.302","Q22.400","Q22.400x003","Q22.500","Q22.600","Q22.800x004","Q22.800x005","Q22.800x007","Q22.801","Q22.802","Q22.900","Q23.000","Q23.001","Q23.100","Q23.101","Q23.200","Q23.200x002","Q23.200x003","Q23.200x004","Q23.300","Q23.300x002","Q23.400","Q23.401","Q23.800","Q23.800x004","Q23.800x008","Q23.801","Q23.802","Q23.803","Q23.804","Q23.805","Q23.900x001","Q23.901","Q24.000x002","Q24.000x003","Q24.100","Q24.200","Q24.300","Q24.300x002","Q24.400","Q24.400x003","Q24.501","Q24.502","Q24.503","Q24.504","Q24.505","Q24.506","Q24.507","Q24.508","Q24.509","Q24.510","Q24.511","Q24.511","Q24.512","Q24.513","Q24.513","Q24.600x002","Q24.601","Q24.602","Q24.603","Q24.800","Q24.800x010","Q24.800x011","Q24.800x012","Q24.800x014","Q24.800x014","Q24.800x017","Q24.800x018","Q24.800x025","Q24.800x026","Q24.800x027","Q24.800x028","Q24.800x030","Q24.803","Q24.804","Q24.805","Q24.806","Q24.807","Q24.808","Q24.809","Q24.810","Q24.811","Q24.812","Q24.813","Q24.814","Q24.815","Q24.900","Q24.901","Q25.000","Q25.100","Q25.200","Q25.300","Q25.301","Q25.302","Q25.303","Q25.400x009","Q25.400x010","Q25.400x012","Q25.400x013","Q25.401","Q25.402","Q25.403","Q25.404","Q25.405","Q25.406","Q25.407","Q25.408","Q25.500","Q25.600","Q25.601","Q25.700x006","Q25.700x007","Q25.700x008","Q25.700x011","Q25.700x012","Q25.701","Q25.702","Q25.703","Q25.704","Q25.705","Q25.900","Q26.000x001","Q26.000x002","Q26.000x003","Q26.000x004","Q26.100","Q26.200x001","Q26.200x002","Q26.200x003","Q26.200x004","Q26.200x005","Q26.300","Q26.301","Q26.302","Q26.400","Q26.500","Q26.500x001","Q26.600","Q26.800x001","Q26.800x002","Q26.800x003","Q26.800x004","Q26.800x005","Q26.800x006","Q26.800x007","Q26.800x008","Q26.800x010","Q26.801","Q26.901","Q26.902","Q87.809"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合FV1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCF_DRG();
        
        if (drg.FV11_group(record)){
            return 'FV11';
        }

        if (drg.FV13_group(record)){
            return 'FV13';
        }

        if (drg.FV15_group(record)){
            return 'FV15';
        }

        return 'FV1';
    }else{
        return '';
    }
}
  