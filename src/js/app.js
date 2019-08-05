import calc_dist_from_lon_lat from './calc_dist_from_lon_lat';

const deg_x1 = 139.639445; 
const deg_y1 = 35.598297;
const deg_x2 = 139.638682;
const deg_y2 = 35.599348;
const {meter, yard} = calc_dist_from_lon_lat(deg_x1, deg_y1, deg_x2, deg_y2);
document.getElementById('app').innerHTML = "カップまでの距離は" + Math.round(yard) + "y (" + Math.round(meter) + " m)";