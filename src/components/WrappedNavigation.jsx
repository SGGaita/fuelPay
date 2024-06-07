import { withNavigation } from '@react-navigation/native';
import { ServiceCardComponent } from '.';


const WrappedServiceCardComponent = withNavigation(ServiceCardComponent);

export default WrappedServiceCardComponent;
