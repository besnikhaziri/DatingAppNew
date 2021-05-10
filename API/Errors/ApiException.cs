namespace API.Errors
{
    public class ApiException
    {
        private int statusCode;
        private string v;

        public ApiException(int statusCode, string v)
        {
            this.statusCode = statusCode;
            this.v = v;
        }

        public ApiException(int satusCode, string message, string details)
        {
            SatusCode = satusCode;
            Message = message;
            Details = details;
        }

        public int SatusCode { get; set; }
        public string Message { get; set; }
        public string Details { get; set; }
    }
}