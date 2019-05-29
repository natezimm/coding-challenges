// Program figures out how many buckets of paint are needed for a paint job

public class PaintJob {
    public static int getBucketCount(double width, double height, double areaPerBucket, int extraBuckets){
        if(width<=0 || height<=0 || areaPerBucket<=0 || extraBuckets < 0){
            return -1;
        }
        return (int) (Math.ceil((width * height)/areaPerBucket) - extraBuckets);
    }
    
    public static int getBucketCount(double width, double height, double areaPerBucket){
	return getBucketCount(width, height, areaPerBucket, 0);
    }
 
    public static int getBucketCount(double area, double areaPerBucket) {
	if(area <= 0){
	    return -1;
	}
	double width = Math.sqrt(area);
	double height = width;
 
	return getBucketCount(width, height, areaPerBucket, 0);
    }
}
