import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../Redux/auth/authSelectors';

const LoadingScreen = () => {

    const isLoading = useSelector(selectIsLoading);

    return (
        isLoading && < Text>Loading...</Text>
    );
};

export default LoadingScreen;