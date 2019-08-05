export default function(deg_x1, deg_y1, deg_x2, deg_y2) {
    console.log('Hello Fon');

    // earth radius(m)
    const r = 6378137
    
    // convert radius from deg
    const rad_x1 = Math.PI * deg_x1 / 180
    const rad_y1 = Math.PI * deg_y1 / 180
    const rad_x2 = Math.PI * deg_x2 / 180
    const rad_y2 = Math.PI * deg_y2 / 180

    // calc
    const siny1siny2 = Math.sin(rad_y1) * Math.sin(rad_y2)
    const cosy1cosy2 = Math.cos(rad_y1) * Math.cos(rad_y2)
    const deltaX = rad_x2 - rad_x1
    const cosdx = Math.cos(deltaX)
    
    // calc distance(km)
    const d = r * Math.acos(siny1siny2 + cosy1cosy2 * cosdx)
    console.log('meter is : ' + d)
    console.log('yard is : ' + d*1.0936)

    return {'meter': d, 'yard': d*1.0936};
}