import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

function Description({}: Props) {
  return (
    <>
      <div className=" max-w-full overflow-hidden">
        <div className="py-10 px-4">
          <h1 className="2xl:text-5xl sm:text-3xl sm:font-extrabold  text-primary font-bold text-center text-ellipsis mt-4 mb-6">
            Instagram Downloder App
          </h1>
          <div className="px-2 mx-auto">
            <p className=" text-[15px] text-justify mb-6">
              <span className="sm:mr-14"></span>Instagram is one of the most
              popular social media platforms between teens and young adults and
              Instagram has a different identity in comparison with other social
              media platforms.
            </p>
            <p className="text-[15px] text-justify text-pretty mb-6">
              <span className="sm:mr-2"></span>The tool is 100% free for a
              lifetime, we did not charge anything with you for download video
              Instagram. We just provided you best services and an easy way of
              downloading your Instagram Video.
            </p>

            <h2 className="text-xl text-primary mb-4 sm:text-center">
              Key Feature of Instagram video downloader:
            </h2>
            <ul className="list-decimal sm:[&>li]:mt-4 sm:ml-5 text-[14px] mb-8">
              <li>
                Free, Fast & Secure tool for any Instagram Video Downloading.
              </li>
              <li>No need to download an additional app.</li>
              <li>No need to create an account for downloading videos.</li>
              <li>No need to share your login or signup details.</li>
              <li>
                Download Instagram video on any device like (Mobile Phone,
                iPhone, Tablet, Pc.)
              </li>
              <li>Download IG video in original quality.</li>
              <li>
                You can also download IGTV videos, Photos, and Feed videos.
              </li>
            </ul>

            <h2 className="text-xl text-primary mb-4 sm:text-center">
              How to Download Instagram Video?
            </h2>
            <p className="text-base text-justify text-wrap mb-6">
              <span className="sm:mr-16"></span>Instagram downloader tool is
              providing very simple Instagram video downloading in only just 2
              steps but before following these instructions:
            </p>
            <ul className="list-disc sm:[&>li]:mt-4 sm:ml-2 text-[14px] mb-8">
              <li>Copy the link to that video which you want to download.</li>
              <li>Open indown.io (in your web browser).</li>
              <li>
                Paste the video link in the Instagram video downloader input
                box.
              </li>
              <li>Now your video will be synchronized automatically.</li>
              <li>
                Click on the Download button to being process your video
                downloading.
              </li>
              <li>
                That`s all! Your video will be downloaded. How simple it is!
              </li>
              <li>
                You can also download IGTV videos, Photos, and Feed videos.
              </li>
            </ul>

            <h2 className="text-xl text-primary mb-4 sm:text-center">
              Copy Link for Download Video Instagram?
            </h2>
            <p className="text-base text-justify text-wrap mb-6">
              <span className="sm:mr-16"></span>Copying the link of your video
              which you want to download is a very simple process just follow
              these steps:
            </p>
            <ul className=" list-decimal sm:[&>li]:mt-4 sm:ml-6 text-[14px] mb-8">
              <li>Open the Instagram application</li>
              <li>Choose the video which you want to download</li>
              <li>Click on the 3 dots.</li>
              <li>Popup open, Now click on Copy Link</li>
              <li>Hurray! Your Instagram video downloading link is copied.</li>
              <li>Happy Downloding journey Boss 🦁 ...</li>
            </ul>
            <h2 className="text-xl text-primary mb-4 sm:text-center">
              Frequently Asked Question
            </h2>
            <Accordion
              className=""
              type="single"
              collapsible
              orientation="horizontal"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How to download Instagram videos in HD on Android?
                </AccordionTrigger>
                <AccordionContent className=" font-medium">
                  Copy the Instagram video link → Go to SaveIG.app → Paste the
                  copied Instagram link into the input box → Download.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Download Instagram Video in Original Quality.
                </AccordionTrigger>
                <AccordionContent className=" font-medium">
                  We are providing you Instagram video downloading in Original
                  High-Quality HD, the quality of the video also matters to the
                  video creator in which format or Quality they uploaded the
                  video. If they uploaded the Video in 720p, 1080p, or in any
                  other pixel quality, we provide you the same quality
                  downloading.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How can be download video Instagram?
                </AccordionTrigger>
                <AccordionContent className=" font-medium">
                  We make our tool simple and secure. We have to provide
                  Instagram video downloading only in just 2 steps. First, you
                  need a link to that video which you want to download and then
                  Paste copied link inside the Instagram video downloader input
                  box which is presented by indown.io and hit the download
                  button.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What is Instagram Video Downloader?
                </AccordionTrigger>
                <AccordionContent className=" font-medium">
                  Instagram Video Downloader is a web-based tool that provides
                  you any Instagram Video Downloading absolutely free of cost
                  without providing your log-in details.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Do I have to pay to download videos from Instagram?
                </AccordionTrigger>
                <AccordionContent className=" font-medium">
                  Absolutely not, with SaveIG.app you can download Instagram
                  videos for free. Download videos from Instagram in high
                  quality 4K, 8K without paying any cost.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Is downloading Instagram Video is illegal?
                </AccordionTrigger>
                <AccordionContent className=" font-medium">
                  No, Download Instagram Video in not illegal, if you use for
                  personal use or make a playlist of video in your phone gallery
                  then its fine no issue but if you use for commercial purpose
                  then you have proper permission of the original video creator
                  or from Instagram.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger>
                  Can we download Instagram private video?
                </AccordionTrigger>
                <AccordionContent className=" font-medium">
                  The answer is Yes! But on this page, we did not allow
                  Instagram private video downloading because private
                  downloading is a little bit tricky. To download Instagram
                  private video, go to - indown.io/private-downloader and follow
                  the instruction for downloading the private video.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <h2 className="text-xl text-primary mb-4 mt-10 sm:text-center">
              Terms and Conditions
            </h2>
            <p className="text-base text-justify text-wrap mb-6 font-medium">
              <span className="sm:mr-16"></span>
              This site is an educational purposes, this site is using
              information that is freely available. This site has not any right
              of videos or photos in which you have downloaded the only right of
              respected users and all the copyright and trademark goes to them.
              Instagram and Instagram logos are trademark and copyright of
              Facebook Inc.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Description;
