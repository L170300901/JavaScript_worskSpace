
#include <opencv2/core/core.hpp> 
#include <opencv2/highgui/highgui.hpp> 
#include <opencv2/imgproc/imgproc.hpp> 
#include <opencv2/features2d/features2d.hpp>
 
using namespace cv;
 
int main(int argc, char** argv) 
{ 
    Mat img_1 = imread("box.png"); 
    Mat img_2 = imread("box_in_scene.png");
 
    // -- Step 1: Detect the keypoints using STAR Detector 
    std::vector<KeyPoint> keypoints_1,keypoints_2; 
    ORB orb; 
    orb.detect(img_1, keypoints_1); 
    orb.detect(img_2, keypoints_2);
 
    // -- Stpe 2: Calculate descriptors (feature vectors) 
    Mat descriptors_1, descriptors_2; 
    orb.compute(img_1, keypoints_1, descriptors_1); 
    orb.compute(img_2, keypoints_2, descriptors_2);
 
    //-- Step 3: Matching descriptor vectors with a brute force matcher 
    BFMatcher matcher(NORM_HAMMING); 
    std::vector<DMatch> mathces; 
    matcher.match(descriptors_1, descriptors_2, mathces); 
    // -- dwaw matches 
    Mat img_mathes; 
    drawMatches(img_1, keypoints_1, img_2, keypoints_2, mathces, img_mathes); 
    // -- show 
    imshow("Mathces", img_mathes);
 
    waitKey(0); 
    return 0; 
}




ORB::ORB(int nfeatures=500, float scaleFactor=1.2f, int nlevels=8, int edgeThreshold=31, 
int firstLevel=0, int WTA_K=2, int scoreType=ORB::HARRIS_SCORE, int patchSize=31)





