import requests
import sys
from datetime import datetime
import json

class ImmoProfiAPITester:
    def __init__(self, base_url="https://fischer-immobilien.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    if isinstance(response_data, list):
                        print(f"   Response: List with {len(response_data)} items")
                    elif isinstance(response_data, dict):
                        print(f"   Response: Dict with keys: {list(response_data.keys())}")
                except:
                    print(f"   Response: {response.text[:100]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                self.failed_tests.append({
                    'name': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'response': response.text[:200]
                })

            return success, response.json() if success and response.content else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                'name': name,
                'error': str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        return self.run_test("Root API", "GET", "", 200)

    def test_team_endpoint(self):
        """Test team members endpoint"""
        success, response = self.run_test("Team Members", "GET", "team", 200)
        if success and isinstance(response, list) and len(response) > 0:
            print(f"   Found {len(response)} team members")
            # Check first team member structure
            first_member = response[0]
            required_fields = ['id', 'name', 'role', 'image']
            for field in required_fields:
                if field not in first_member:
                    print(f"   ⚠️  Missing field '{field}' in team member")
        return success

    def test_properties_endpoint(self):
        """Test properties endpoint"""
        success, response = self.run_test("Properties", "GET", "properties", 200)
        if success and isinstance(response, list) and len(response) > 0:
            print(f"   Found {len(response)} properties")
            # Check first property structure
            first_property = response[0]
            required_fields = ['id', 'title', 'location', 'property_type', 'status', 'image']
            for field in required_fields:
                if field not in first_property:
                    print(f"   ⚠️  Missing field '{field}' in property")
        return success

    def test_single_property(self):
        """Test single property endpoint"""
        return self.run_test("Single Property", "GET", "properties/1", 200)

    def test_jobs_endpoint(self):
        """Test jobs endpoint"""
        success, response = self.run_test("Job Listings", "GET", "jobs", 200)
        if success and isinstance(response, list) and len(response) > 0:
            print(f"   Found {len(response)} job listings")
        return success

    def test_testimonials_endpoint(self):
        """Test testimonials endpoint"""
        success, response = self.run_test("Testimonials", "GET", "testimonials", 200)
        if success and isinstance(response, list) and len(response) > 0:
            print(f"   Found {len(response)} testimonials")
        return success

    def test_contact_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": f"Test User {datetime.now().strftime('%H%M%S')}",
            "email": "test@example.com",
            "phone": "+49 123 456789",
            "message": "Dies ist eine Testnachricht für die Kontaktformular-API.",
            "service_type": "verkauf"
        }
        
        success, response = self.run_test("Contact Submission", "POST", "contact", 200, test_data)
        if success:
            print(f"   Contact created with ID: {response.get('id', 'N/A')}")
        return success

    def test_get_contacts(self):
        """Test getting all contacts"""
        return self.run_test("Get Contacts", "GET", "contacts", 200)

def main():
    print("🚀 Starting ImmoProfi Fischer API Tests")
    print("=" * 50)
    
    tester = ImmoProfiAPITester()
    
    # Run all tests
    test_methods = [
        tester.test_root_endpoint,
        tester.test_team_endpoint,
        tester.test_properties_endpoint,
        tester.test_single_property,
        tester.test_jobs_endpoint,
        tester.test_testimonials_endpoint,
        tester.test_contact_submission,
        tester.test_get_contacts,
    ]
    
    for test_method in test_methods:
        test_method()
    
    # Print results
    print("\n" + "=" * 50)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} passed")
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for failed in tester.failed_tests:
            if 'error' in failed:
                print(f"   - {failed['name']}: {failed['error']}")
            else:
                print(f"   - {failed['name']}: Expected {failed.get('expected')}, got {failed.get('actual')}")
    
    success_rate = (tester.tests_passed / tester.tests_run) * 100 if tester.tests_run > 0 else 0
    print(f"📈 Success Rate: {success_rate:.1f}%")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())