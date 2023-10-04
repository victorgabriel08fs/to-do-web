import { useAuth } from "../contexts/auth";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const Routes = () => {
    const { signed } = useAuth();
    return (
        signed ? <PrivateRoutes /> : <PublicRoutes />
    );
}

export default Routes;