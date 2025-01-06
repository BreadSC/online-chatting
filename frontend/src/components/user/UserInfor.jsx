import PropTypes from 'prop-types';
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";

import { Box, Typography, Divider } from "@mui/material";
import { useAuthContext } from '../../context/AuthContext';


function UserInfor(props) {
    const { onClose, open } = props;

    const handleClose = () => {
        onClose();
    };
    const {authUser} = useAuthContext();
    
    return (
        <Dialog onClose={handleClose} open={open} maxWidth="xs" fullWidth>
            {/* Header */}
            <Box sx={{ position: 'relative' }}>
                <img
                    src="https://i.pinimg.com/736x/08/1a/ed/081aed2e7ddc029f940021ddb22145fc.jpg" // Replace with dynamic URL
                    alt="Cover"
                    style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                />
                <Avatar
                    src={authUser.profilePic} // Replace with dynamic URL
                    alt="Avatar"
                    sx={{
                        width: 80,
                        height: 80,
                        position: 'absolute',
                        bottom: -40,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        border: '3px solid white',
                    }}
                />
            </Box>

            <Box sx={{ textAlign: 'center', mt: 6, px: 2 }}>
                <Typography variant="h6" fontWeight="bold">
                    {authUser.fullName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Cùng nhau tạo ra các cuộc trò chuyện vui vẻ
                </Typography>

                

                
            </Box>

            <Divider sx={{ my: 2 }} />

            <Box sx={{ px: 2, pb: 2 }}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Thông tin cá nhân
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <strong>Tên:</strong> {authUser.fullName}
                </Typography>
                

                <Divider sx={{ my: 2 }} />

                
            </Box>
        </Dialog>
    );
}

UserInfor.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default UserInfor;
