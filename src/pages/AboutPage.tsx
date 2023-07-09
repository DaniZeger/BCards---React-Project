import { Typography } from "@mui/material";
import Header from "../components/Header";
import IconCard from "../components/IconCard";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SecurityIcon from '@mui/icons-material/Security';


function AboutPage() {

    return (
        <>
            <Header title="About BCard" subtitle="Who are we?" />
            <div style={{ margin: '0 2%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        Welcome to BCard, your ultimate business card connection app! Our mission is to bridge the gap between businesses and individuals by providing a seamless platform for networking and professional connections.
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 2 }}>
                        At BCard, we understand the importance of making a lasting impression in the business world. That's why we've designed an intuitive and user-friendly app that allows you to create, share, and manage your business cards effortlessly. Whether you're a seasoned entrepreneur, a freelancer, or a student looking to kick-start your career, BCard is here to help you make meaningful connections that can propel your professional journey.
                    </Typography>
                </div>
                <div style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)', marginLeft: '2%' }}>
                    <img width={450} src="https://everythingproperty.co.za/wp-content/uploads/2022/12/23-tips-to-run-your-business-better-in-2023-.jpg" alt="" />
                </div>
            </div >

            <div style={{ display: 'flex', margin: '1%', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                <IconCard title="Easy Card Sharing" text="Say goodbye to outdated paper cards and hello to digital convenience. With BCard, you can effortlessly share your business card with potential contacts through various channels such as email or messaging apps.">
                    <ShareIcon />
                </IconCard>
                <IconCard title="Save your favorites" text="Keep all your received business cards organized in one place with our digital wallet feature. Easily search, categorize, and access contacts whenever you need them, eliminating the hassle of sorting through stacks of physical cards.">
                    <FavoriteIcon />
                </IconCard>
                <IconCard title="Discover and Connect" text="Explore our extensive network of professionals, entrepreneurs, and businesses. BCard allows you to discover potential collaborators, mentors, or industry experts within your field. Connect with them directly through the app to expand your professional network.">
                    <ConnectWithoutContactIcon />
                </IconCard>
                <IconCard title="Privacy and Security" text="We take your privacy and data security seriously. BCard ensures that your information is protected and shared only with your consent, giving you peace of mind as you connect with others.">
                    <SecurityIcon />
                </IconCard>
            </div>
            <div style={{ margin: '0 2%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Join the BCard community today and unlock a world of professional opportunities. Connect with the right people, showcase your skills, and take your career to new heights. Whether you're a small business owner, a job seeker, or an aspiring professional, BCard is here to help you make lasting connections that matter.
                </Typography>
            </div>
        </>
    );
}

export default AboutPage;