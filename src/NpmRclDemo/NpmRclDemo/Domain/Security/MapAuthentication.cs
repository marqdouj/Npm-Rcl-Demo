namespace NpmRclDemo.Domain.Security
{
    public enum MapAuthenticationType
    {
        SubscriptionKey,
        Aad,
    }

    public class MapAuthentication
    {
        public MapAuthenticationType AuthenticationType { get; set; }
        public string AuthType => AuthenticationType.ToAuthType();
        public string? SubscriptionKey { get; set; }
        public string? AadAppId { get; set; }
        public string? AadTenant { get; set; }
        public string? ClientId { get; set; }
    }

    internal static class MapAuthenticationExtensions
    {
        public static string ToAuthType(this MapAuthenticationType authenticationType)
        {
            return authenticationType switch
            {
                MapAuthenticationType.SubscriptionKey => "subscriptionKey",
                MapAuthenticationType.Aad => "aad",
                _ => throw new ArgumentOutOfRangeException(nameof(authenticationType), authenticationType, null)
            };
        }
    }
}
