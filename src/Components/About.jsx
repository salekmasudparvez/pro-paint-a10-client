

const About = () => {
    return (
        <div className="flex justify-between items-center flex-col lg:flex-row rounded-md gap-6 bg-orange-800 text-white">
            <div><img className=" w-full rounded-md" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/53e107104652791.5f681e77aa53e.jpg" /></div>
            <div className="flex flex-col justify-start gap-6 font-playfair items-start md:p-10 p-6">
                <h1 className="text-3xl font-bold ">A Legendary Community</h1>
                <p className="text-[#c0bfbf]"> My favourite part of my day is talking to students; it&apos;s so exciting as each student is completely unique with their own story and their own motivations for taking art classes. Teaching at Crown Art is one of those places where you learn something new from your students every day. I have a greate opportunity to impove myselfe like an artist.At Crown Art School we are teaching different art techniques to students of all ages. During my lessons I try to bring out the inner artists of students to help build their skills.</p>
            </div>
        </div>
    );
};

export default About;