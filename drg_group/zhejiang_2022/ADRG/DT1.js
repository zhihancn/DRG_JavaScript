import {putMessage,intersect,SS_VALID} from '../Base.js';
import {MDCD_DRG} from '../DRG/MDCD_DRG.js';

export default function DT1_group(record){
    let adrg_zd=["A18.601+H67.0*","B05.300+H67.1*","B05.800x009","B08.500","B08.501","B08.802","B37.802","B44.801","B44.802","B49.x11","H65.000","H65.000x002","H65.101","H65.102","H65.200","H65.300","H65.300x001","H65.400","H65.400x001","H65.900","H65.900x001","H65.901","H66.000","H66.000x002","H66.001","H66.101","H66.102","H66.200","H66.301","H66.400","H66.900","H66.900x002","H66.900x003","H68.000","H70.000","H70.000x007","H70.000x009","H70.001","H70.002","H70.003","H70.004","H70.100","H70.101","H70.102","H70.103","H70.200","H70.201","H70.800","H70.800x001","H70.800x002","H70.900","H71.x00","H71.x01","H71.x02","H71.x03","H71.x04","H71.x05","H72.000","H72.001","H72.100","H72.101","H72.200","H72.800","H72.900","H73.000","H73.001","H73.100","H73.101","H73.102","H73.800x005","H73.801","H73.802","H73.803","H73.804","H73.900","H74.000","H74.101","H74.801","H74.802","J00.x00","J00.x00x004","J00.x00x006","J00.x00x007","J00.x00x008","J01.000","J01.001","J01.100","J01.200","J01.300","J01.400","J01.800","J01.900","J01.900x003","J01.901","J02.000","J02.801","J02.802","J02.900","J02.900x002","J02.900x005","J02.901","J02.902","J02.903","J02.905","J03.000","J03.800","J03.900","J03.900x001","J03.900x006","J03.901","J03.902","J06.800x001","J06.900","J06.900x001","J09.x05+H67.1*","J10.100","J10.100x001","J10.100x002","J10.100x003","J10.100x004","J10.101","J10.800","J10.803+H67.1*","J10.804+G05.1*","J11.100x001","J11.100x002","J11.100x003","J11.100x004","J11.102","J11.802+H67.1*","J30.000","J30.100","J30.101","J30.300x001","J30.300x002","J30.400","J31.000","J31.001","J31.002","J31.003","J31.004","J31.005","J31.100","J31.200","J31.201","J31.202","J31.203","J31.204","J32.000","J32.000x005","J32.000x009","J32.001","J32.002","J32.003","J32.004","J32.005","J32.100","J32.100x005","J32.101","J32.102","J32.200","J32.200x004","J32.200x005","J32.201","J32.300","J32.300x004","J32.301","J32.302","J32.400","J32.400x001","J32.800x001","J32.800x002","J32.800x003","J32.800x004","J32.800x006","J32.800x007","J32.800x008","J32.800x009","J32.800x010","J32.800x011","J32.801","J32.802","J32.803","J32.900","J32.900x007","J32.901","J32.902","J32.903","J32.904","J32.905","J32.906","J35.000","J35.802","J39.000x001","J39.001","J39.002","J39.003","J39.101","J39.216","J39.220","T70.000","T70.100"];
    let adrg_zd1=[];
    let adrg_ss=[];
    let adrg_ss1=[];
    let dept_list=[];
    
    if (true && adrg_zd.includes(record.zdList[0])){
        putMessage('符合DT1入组条件，匹配规则：主诊断匹配');
        let drg=new MDCD_DRG();
        
        if (drg.DT10_group(record)){
            return 'DT10';
        }

        if (drg.DT11_group(record)){
            return 'DT11';
        }

        if (drg.DT13_group(record)){
            return 'DT13';
        }

        if (drg.DT15_group(record)){
            return 'DT15';
        }

        return 'DT1';
    }else{
        return '';
    }
}
  