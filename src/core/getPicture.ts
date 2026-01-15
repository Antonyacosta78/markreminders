import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export default async function getPicture() {
  const image = await Camera.getPhoto({
    quality: 70,
    allowEditing: false,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Camera,
    height: 600, //px? dpi? docs are not clear on that
  });
  
  return image;
}